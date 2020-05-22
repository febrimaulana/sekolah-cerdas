export const dataForm = [
    {
        name: "nama",
        label: "Nama",
        type: 'null',
        rules: [
            {
                required: true,
                message: 'Nama tidak boleh kosong!',
            }
        ],
    },   
    {
        name: "telephoneNumber",
        label: "Nomor Telpon",
        type: null,
        rules: [
            {
                required: true,
                message: 'Nomor Telepon tidak boleh kosong',
            }
        ]
    }, 
    {
        name: "dateEvent",
        label: "Tanggal",
        type: 'date',
        rules: [
            {
                required: true,
                message: 'Tanggal belum dipilih!',
            }
        ]
    }, 
    {
        name: "dateFollowUp",
        label: "Tanggal Tindak Lanjut",
        type: 'date', 
        rules: [
            {
                required: true,
                message: 'Tanggal belum dipilih!',
            }
        ]
    }, 
    {
        name: "calltype",
        label: "Tipe Panggilan",
        type: 'select',
        rules: [
            {
                required: true,
                message: 'Jam belum dipilih!',
            }
        ],
        select: [{
            name: 'Masuk',
            value: 'Masuk'                
        }, {
            name: 'Keluar',
            value: 'Keluar'
        }]
    }, 
]