"use client"

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import type { PersonInfo } from '../../types'

interface PersonFormProps {
  title: string
  info: PersonInfo
  isPartner?: boolean
  onChange: (info: PersonInfo) => void
  onValidChange?: (isValid: boolean) => void
}

interface FormErrors {
  name?: string
  gender?: string
  birthDate?: string
  education?: string
  occupation?: string
  requirements?: string
}

const styles = {
  input: "w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50",
  label: "block text-sm mb-2.5",
  radioGroup: "flex gap-3",
  radioButton: "flex-1 relative",
  radioInput: "absolute opacity-0 w-full h-full cursor-pointer",
  radioLabel: "block text-center py-2.5 px-4 rounded-lg border border-gray-200 cursor-pointer transition-colors",
  radioLabelChecked: "bg-primary/10 border-primary text-primary",
  inputError: "border-red-300 focus:ring-red-200",
  errorTooltip: "absolute right-0 top-0 text-red-500 text-sm",
  formGroup: "relative min-h-[70px]"
}

// 添加必填标识的辅助组件
const RequiredMark = () => (
  <span className="text-rose-500 ml-1">*</span>
)

export function PersonForm({ title, info, isPartner, onChange, onValidChange }: PersonFormProps) {
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  // 验证表单
  const validateForm = () => {
    const newErrors: FormErrors = {}

    // 验证姓名
    if (!info.name.trim()) {
      newErrors.name = '请输入姓名'
    } else if (info.name.length < 2) {
      newErrors.name = '姓名至少2个字符'
    }

    // 验证性别
    if (!info.gender) {
      newErrors.gender = '请选择性别'
    }

    // 验证出生日期
    if (!info.birthDate.date) {
      newErrors.birthDate = '请选择出生日期'
    } else {
      const birthYear = parseInt(info.birthDate.date.split('-')[0])
      const age = new Date().getFullYear() - birthYear
      if (age < 18) {
        newErrors.birthDate = '年龄必须大于18岁'
      } else if (age > 80) {
        newErrors.birthDate = '年龄必须小于80岁'
      }
    }

    // 验证学历
    if (!info.education) {
      newErrors.education = '请选择学历'
    }

    // 验证职业
    if (!info.occupation.trim()) {
      newErrors.occupation = '请输入职业'
    }

    // 验证期望描述
    if (info.requirements?.description && info.requirements.description.length > 200) {
      newErrors.requirements = '期望描述不能超过200字'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // 当表单数据变化时验证
  useEffect(() => {
    const isValid = validateForm()
    onValidChange?.(isValid)
  }, [info])

  // 处理字段失焦
  const handleBlur = (field: keyof FormErrors) => {
    setTouched(prev => ({ ...prev, [field]: true }))
    validateForm()
  }

  // 生成年份选项：允许18-80岁
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 63 }, (_, i) => currentYear - 80 + i).reverse()
  
  // 生成月份选项
  const months = Array.from({ length: 12 }, (_, i) => i + 1)
  
  // 生成日期选项
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month, 0).getDate()
  }
  
  // 解析当前日期
  const [year, month, day] = info.birthDate.date.split('-').map(Number)
  
  // 获取当前选择月份的天数
  const daysInMonth = year && month ? getDaysInMonth(year, month) : 31
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  const handleDateChange = (type: 'year' | 'month' | 'day', value: string) => {
    let newYear = year || currentYear - 25
    let newMonth = month || 1
    let newDay = day || 1

    if (type === 'year') newYear = parseInt(value)
    if (type === 'month') newMonth = parseInt(value)
    if (type === 'day') newDay = parseInt(value)

    // 确保日期有效
    const maxDay = getDaysInMonth(newYear, newMonth)
    if (newDay > maxDay) newDay = maxDay

    const dateStr = `${newYear}-${String(newMonth).padStart(2, '0')}-${String(newDay).padStart(2, '0')}`
    onChange({
      ...info,
      birthDate: { ...info.birthDate, date: dateStr }
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl p-6 shadow-sm"
    >
      <h2 className="text-xl font-semibold mb-6">{title}</h2>
      
      <div className="space-y-4">
        {/* 姓名 */}
        <div className={styles.formGroup}>
          <div className="flex justify-between items-center">
            <label className={styles.label}>
              姓名 <RequiredMark />
            </label>
            {touched.name && errors.name && (
              <span className={styles.errorTooltip}>{errors.name}</span>
            )}
          </div>
          <input
            type="text"
            value={info.name}
            onChange={e => onChange({ ...info, name: e.target.value })}
            onBlur={() => handleBlur('name')}
            className={`${styles.input} h-11 ${touched.name && errors.name ? styles.inputError : ''}`}
            placeholder="请输入姓名"
          />
        </div>

        {/* 性别和学历一行显示 */}
        <div className="grid grid-cols-2 gap-5">
          {/* 性别 */}
          <div className={styles.formGroup}>
            <div className="flex justify-between items-center">
              <label className={styles.label}>
                性别 <span className="text-red-500">*</span>
              </label>
              {touched.gender && errors.gender && (
                <span className={styles.errorTooltip}>{errors.gender}</span>
              )}
            </div>
            <div className={styles.radioGroup}>
              <div className={styles.radioButton}>
                <input
                  type="radio"
                  checked={info.gender === 'male'}
                  onChange={() => onChange({ ...info, gender: 'male' })}
                  className={styles.radioInput}
                />
                <div className={`
                  ${styles.radioLabel}
                  ${info.gender === 'male' ? styles.radioLabelChecked : ''}
                `}>
                  男
                </div>
              </div>
              <div className={styles.radioButton}>
                <input
                  type="radio"
                  checked={info.gender === 'female'}
                  onChange={() => onChange({ ...info, gender: 'female' })}
                  className={styles.radioInput}
                />
                <div className={`
                  ${styles.radioLabel}
                  ${info.gender === 'female' ? styles.radioLabelChecked : ''}
                `}>
                  女
                </div>
              </div>
            </div>
          </div>

          {/* 学历 */}
          <div className={styles.formGroup}>
            <div className="flex justify-between items-center">
              <label className={styles.label}>
                学历 <RequiredMark />
              </label>
              {touched.education && errors.education && (
                <span className={styles.errorTooltip}>{errors.education}</span>
              )}
            </div>
            <select
              value={info.education}
              onChange={e => onChange({ ...info, education: e.target.value })}
              onBlur={() => handleBlur('education')}
              className={`${styles.input} ${touched.education && errors.education ? styles.inputError : ''}`}
            >
              <option value="">请选择</option>
              <option value="高中">高中</option>
              <option value="专科">专科</option>
              <option value="本科">本科</option>
              <option value="硕士">硕士</option>
              <option value="博士">博士</option>
            </select>
          </div>
        </div>

        {/* 出生日期 */}
        <div className={styles.formGroup}>
          <div className="flex justify-between items-center">
            <label className={styles.label}>
              出生日期 <RequiredMark />
            </label>
            {touched.birthDate && errors.birthDate && (
              <span className={styles.errorTooltip}>{errors.birthDate}</span>
            )}
          </div>
          <div className="grid grid-cols-3 gap-3">
            <select
              value={year || ''}
              onChange={(e) => handleDateChange('year', e.target.value)}
              className={styles.input}
            >
              <option value="">年</option>
              {years.map(y => (
                <option key={y} value={y}>{y}年</option>
              ))}
            </select>
            <select
              value={month || ''}
              onChange={(e) => handleDateChange('month', e.target.value)}
              className={styles.input}
            >
              <option value="">月</option>
              {months.map(m => (
                <option key={m} value={m}>{m}月</option>
              ))}
            </select>
            <select
              value={day || ''}
              onChange={(e) => handleDateChange('day', e.target.value)}
              className={styles.input}
            >
              <option value="">日</option>
              {days.map(d => (
                <option key={d} value={d}>{d}日</option>
              ))}
            </select>
          </div>
        </div>

        {/* 职业 */}
        <div>
          <label className={styles.label}>职业 <RequiredMark /></label>
          <input
            type="text"
            value={info.occupation}
            onChange={e => onChange({ ...info, occupation: e.target.value })}
            className={`${styles.input} h-11`}
            placeholder="请输入职业"
          />
        </div>

        {/* 期望描述 */}
        <div className="pt-2">
          <label className={styles.label}>对另一半的期望</label>
          <textarea
            value={info.requirements?.description || ''}
            onChange={e => onChange({
              ...info,
              requirements: {
                ...info.requirements,
                description: e.target.value
              }
            })}
            className={styles.input}
            rows={3}
            placeholder="请描述您对另一半的期望..."
          />
        </div>
      </div>
    </motion.div>
  )
} 