export const servicesMenu: {
  link: string
  title: { [key in 'en' | 'bn']: string }
  imgLink: string
  imgAlt: { [key in 'en' | 'bn']: string }
  description: { [key in 'en' | 'bn']: string }
}[] = [
  {
    link: 'shifting',
    title: { en: 'Shifting', bn: '' },
    imgLink: 'sofa',
    imgAlt: { en: 'shifting symbol', bn: '' },
    description: { en: 'We pack and shift office/home items.', bn: '' }
  },
  {
    link: 'transport',
    title: { en: 'Transport', bn: '' },
    imgLink: 'truck',
    imgAlt: { en: 'transport symbol', bn: '' },
    description: { en: 'We provide trucks to move items.', bn: '' }
  },
  {
    link: 'cleaning',
    title: { en: 'Transport', bn: '' },
    imgLink: 'sponge',
    imgAlt: { en: 'cleaning symbol', bn: '' },
    description: { en: 'We provide home/office cleaning services.', bn: '' }
  },
  {
    link: 'pest-control',
    title: { en: 'Pest Control', bn: '' },
    imgLink: 'window',
    imgAlt: { en: 'pest control symbol', bn: '' },
    description: { en: 'We clean insects and pests from home/office.', bn: '' }
  },
  {
    link: 'electrical',
    title: { en: 'Electrical', bn: '' },
    imgLink: 'chandelier',
    imgAlt: { en: 'electrical repair symbol', bn: '' },
    description: { en: 'Our experts install and repair appliances.', bn: '' }
  },
  {
    link: 'plumbing',
    title: { en: 'Plumbing', bn: '' },
    imgLink: 'sink',
    imgAlt: { en: 'plumbing symbol', bn: '' },
    description: { en: 'Our expert can repair any plubming issue.', bn: '' }
  }
]
