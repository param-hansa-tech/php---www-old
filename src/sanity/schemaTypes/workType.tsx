/* eslint-disable @typescript-eslint/no-explicit-any */
import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'
// import {Stack, Text } from '@sanity/ui';

const MyPreviewComponent = (props: any) => {
  return (
    // <Stack space={3}>
      props.renderDefault(props)
    //   <Text size={1}>
    //     Characters: {props.value?.length || 0}
    //   </Text>
    // </Stack>
  )
}

export const workType = defineType({
  name: 'work',
  title: 'Work',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        })
      ]
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
    }),
    defineField({
      name: 'sections',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        name: 'section',
        title: 'Section',
        components: {
          preview: MyPreviewComponent, // Add custom preview component
        },
        fields: [defineField({
          name: 'body',
          type: 'blockContent',
        })],
      },
        )],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
      media: 'mainImage',
    },
    prepare(selection) {
      const {slug} = selection
      return {...selection, subtitle: slug && `/${slug}`}
    },
  },
})
