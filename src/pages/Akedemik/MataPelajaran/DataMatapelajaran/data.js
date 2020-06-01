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
        name: "kdmatapelajaran",
        label: "Kode Mata Pelajaran",
        type: 'radio',
        radio: [{
            name: 'teori',
            value: 'Teori',
            default: true,
        }, {
            name: 'praktik',
            value: 'Praktik'
        }],
        rules: [
            {
                required: true,
                message: 'Jenis kelamin belum dipilih!',
            }
        ]
    }, {
        name: "typematapelajaaran",
        label: "Type Mata Pelajaran",
        type: null,
        rules: [
            {
                required: true,
                message: 'Form alamat tidak boleh kosong!',
            }
        ]
    }, 
]