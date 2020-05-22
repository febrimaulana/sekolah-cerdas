export const dataForm = [
    {
        name: "nameStudent",
        label: "Tipe Biaya",
        type: null,
        rules: [
            {
                required: true,
                message: 'Form Tipe Biaya tidak boleh kosong!',
            }
        ]
    },
    {
        name: "nameStudent",
        label: "Kode Biaya",
        type: null,
        rules: [
            {
                required: true,
                message: 'Form Kode Biaya tidak boleh kosong!',
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
                message: 'Form Deskripsi tidak boleh kosong!',
            }
        ]
    },   
    // {
    //     name: "placeOfBirthStudent",
    //     label: "Tempat Lahir",
    //     type: null,
    //     rules: [
    //         {
    //             required: true,
    //             message: 'Form tempat lahir tidak boleh kosong!',
    //         }
    //     ]
    // },
    // {
    //     name: "genderStudent",
    //     label: "Jenis Kelamin",
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
    //  {
    //     name: "parentsStudent",
    //     label: "Orang Tua Siswa",
    //     type: null,
    //     rules: [
    //         {
    //             required: true,
    //             message: 'Form orang tua tidak boleh kosong!',
    //         }
    //     ]
    // }, {
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