import { MdPerson as icon } from 'react-icons/md';

export default {
    // Computer Name
    name: 'person',
    // visible title
    title: 'Cooks',
    type: 'document',
    icon,
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            description: 'Name of the cook',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 100,
            },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Some information about person'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },

    ],
};