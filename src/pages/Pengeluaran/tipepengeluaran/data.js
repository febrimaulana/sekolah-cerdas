export const dataForm = [
    {
        name: "nameStudent",
        label: "Nama",
        type: null,
        rules: [
            {
                required: true,
                message: 'Form nama tidak boleh kosong!',
            }
        ]
    },    
    // {
    //     name: "placeOfBirthStudent",
    //     label: "Nomor Faktur",
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
    //     name: "parentsStudent",
    //     label: "Jumlah",
    //     type: null,
    //     rules: [
    //         {
    //             required: true,
    //             message: 'Form orang tua tidak boleh kosong!',
    //         }
    //     ]
    // }, 
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