const dataForm = [
    {
        name: "nama_siswa",
        label: "Nama Siswa",
        type: null,
        rules: [
            {
                required: true,
                message: 'Form tidak boleh kosong!',
            }
        ]
    },    
    {
        name: "tempat_lahir_siswa",
        label: "Tempat Lahir",
        type: null,
        rules: [
            {
                required: true,
                message: 'Form tidak boleh kosong!',
            }
        ]
    },
    {
        name: "jenis_kelamin_siswa",
        label: "Jenis Kelamin",
        type: 'radio',
        radio: [{
            name: 'Laki - Laki',
            value: 'L',
            default: true,
        }, {
            name: 'Perempuan',
            value: 'P'
        }],
        rules: [
            {
                required: true,
                message: 'Form tidak boleh kosong!',
            }
        ]
    }, {
        name: "alamat_siswa",
        label: "Alamat Siswa",
        type: 'textarea',
        rules: [
            {
                required: true,
                message: 'Form tidak boleh kosong!',
            }
        ]
    }, {
        name: "orang_tua_siswa",
        label: "Orang Tua Siswa",
        type: null,
        rules: [
            {
                required: true,
                message: 'Form tidak boleh kosong!',
            }
        ]
    }, {
        name: "tanggal_lahir_siswa",
        label: "Tanggal Lahir",
        type: 'date',
        rules: [
            {
                required: true,
                message: 'Form tidak boleh kosong!',
            }
        ]
    },
]

export default dataForm;