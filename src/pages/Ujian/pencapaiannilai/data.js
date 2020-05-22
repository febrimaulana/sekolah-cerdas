export const dataForm = [
    {
        name: "nameStudent",
        label: "Nama Pencapaian",
        type: null,
        rules: [
            {
                required: true,
                message: 'Form Nama Pencapaian tidak boleh kosong!',
            }
        ]
    },    
    {
        name: "placeOfBirthStudent",
        label: "Dari (%)",
        type: null,
        rules: [
            {
                required: true,
                message: 'Form tempat lahir tidak boleh kosong!',
            }
        ]
    },
    // {
    //     name: "genderStudent",
    //     label: "Tanggal",
    //     type: 'radio',
    //     radio: [{
    //         name: 'Laki - Laki',
    //         value: 'L',
    //         default: true,
    //     }, {
    //         name: 'Perempuan',
    //         value: 'P'
    //     }],
    //     rules: [
    //         {
    //             required: true,
    //             message: 'Jenis kelamin belum dipilih!',
    //         }
    //     ]
    // },  
    {
        name: "parentsStudent",
        label: "Hingga (%)",
        type: null,
        rules: [
            {
                required: true,
                message: 'Form Hingga (%) tidak boleh kosong!',
            }
        ]
    },
    {
        name: "addressStudent",
        label: "Deskripsi",
        type: 'textarea',
        rules: [
            {
                required: true,
                message: 'Form alamat tidak boleh kosong!',
            }
        ]
    },
    // {
    //     name: "dateOfBirthStudent",
    //     label: "Tanggal Lahir",
    //     type: 'date',
    //     rules: [
    //         {
    //             required: true,
    //             message: 'Tanggal lahir belum dipilih!',
    //         }
    //     ]
    // },
]