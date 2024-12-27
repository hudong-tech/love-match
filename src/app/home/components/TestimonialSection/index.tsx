"use client"

import { Section } from '@/components/common/Section'
import { SectionHeader } from '@/components/common/SectionHeader'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface Testimonial {
  id: number;
  content: string;
  name: string;
  title: string;
  avatar: string;
  tags: string[];
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "通过心缘AI的匹配，我找到了真正懂我的另一半。算法真的很准确，为我们的幸福感谢心缘！",
    name: "吴小姐",
    title: "已注册6个月",
    avatar: "/avatars/female-1.png",
    tags: ["95后", "教师"],
    rating: 5
  },
  {
    id: 2,
    content: "最开始我对AI匹配持怀疑态度，但事实证明这个平台真的很专业。现在我们已经准备结婚了。",
    name: "李先生",
    title: "已注册1年",
    avatar: "/avatars/male-1.png",
    tags: ["90后", "工程师"],
    rating: 5
  },
  {
    id: 3,
    content: "测评系统非常全面，帮助我更好地了解自己。推荐的对象都很符合我的期望，体验很好。",
    name: "张小姐",
    title: "已注册3个月",
    avatar: "/avatars/female-2.png",
    tags: ["00后", "设计师"],
    rating: 4
  }
];

export function TestimonialSection() {
  return (
    <Section 
      background="secondary"
      fullScreen
      className="snap-start"
      id="testimonials"
    >
      <div className="container-page relative">
        <SectionHeader
          title="幸福见证"
          description="听听他们的故事，你也可以找到属于自己的幸福"
          className="mb-16"
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden bg-primary/5">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    sizes="64px"
                    quality={90}
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-text-primary truncate">
                      {testimonial.name}
                    </h4>
                    <span className="inline-block px-2 py-0.5 text-xs font-medium text-primary bg-primary/10 rounded-full">
                      {testimonial.tags[0]}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary mb-1">
                    {testimonial.title}
                  </p>
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-text-secondary leading-relaxed">
                {testimonial.content}
              </p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {testimonial.tags.map((tag, i) => (
                  <span 
                    key={i}
                    className="inline-block px-2 py-0.5 text-xs font-medium text-text-secondary bg-gray-100 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
} 