export const dataForm = [
    {
        name: "purpose",
        label: "Nama Barang",
        type: 'select',
        rules: [
            {
                required: true,
                message: 'Form tidak boleh kosong!',
            }
        ],
        select: [{
            name: 'A',
            value: 'B'                
        }, {
            name: 'A',
            value: 'B'
        }]
    },
    {
        name: "purpose",
        label: "Kategori",
        type: 'select',
        rules: [
            {
                required: true,
                message: 'Form tidak boleh kosong!',
            }
        ],
        select: [{
            name: 'A',
            value: 'A'                
        }, {
            name: 'B',
            value: 'B'
        }]
    },
    {
        name: "timeIn",
        label: "Deskripsi",
        type: null,
    }, 
]