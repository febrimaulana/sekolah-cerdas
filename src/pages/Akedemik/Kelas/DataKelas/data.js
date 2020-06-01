export const dataForm = [
    {
        name: "matapelajaran",
        label: "Mata Pelajaran",
        type: null,
        rules: [
            {
                required: true,
                message: 'Form nama tidak boleh kosong!',
            }
        ]
    },    
    {
        name: "checksubclass",
        label: "checkbox",
        type: 'checkbox',
        rules: [
            {
                required: true,
                message: 'Form tidak boleh kosong!',
            }
        ],
        checkbox: [{
            name: 'A',
            value: 'L'                
        }, {
            name: 'B',
            value: 'B'
        }]
    },
     
]