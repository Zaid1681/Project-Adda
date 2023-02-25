export default {
    name: 'user',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'email',
            type: 'string',
            title: 'Email'
        },
        {
            name: 'createdAt',
            type: 'datetime',
            title: 'Created At'
        },
        {
            name: 'updatedAt',
            type: 'datetime',
            title: 'Updated At'
        },
        {
            name: 'projects',
            type: 'array',
            title: 'Projects',
            of: [
                {
                    type: 'object',
                    name: 'project',
                    title: 'Project',
                    fields: [
                        {
                            name: 'projectName',
                            type: 'string',
                            title: 'Project Name'
                        },
                        {
                            name: 'year',
                            type: 'number',
                            title: 'Year'
                        },
                        {
                            name: 'department',
                            type: 'string',
                            title: 'Department'
                        },
                        {
                            name: 'githubLink',
                            type: 'url',
                            title: 'GitHub Link',
                            validation: Rule => Rule.uri({
                                scheme: ['http', 'https'] // Add any additional schemes that you want to allow
                            })
                        },
                        {
                            name: 'projectLink',
                            type: 'url',
                            title: 'Project Link',
                            validation: Rule => Rule.uri({
                                scheme: ['http', 'https'] // Add any additional schemes that you want to allow
                            })
                        },
                        {
                            name: 'projectDescription',
                            type: 'text',
                            title: 'Project Description'
                        },
                        {
                            name: 'projectImage',
                            type: 'image',
                            title: 'Project Image'
                        },
                    ]
                }
            ]
        }
    ]
}