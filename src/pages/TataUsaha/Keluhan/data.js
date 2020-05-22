export const dataForm = [
    {
        name: "id",
        label: "Nomor Keluhan",
        type: null,
        rules: [
            {
                required: true,
                message: 'Nomor Keluhan tidak boleh kosong!',
            }
        ]
    },
    {
        name: "complainttype",
        label: "Tipe Keluhan",
        type: 'select',
        rules: [
            {
                required: true,
                message: 'Form tidak boleh kosong!',
            }
        ],
        select: [{
            name: 'Biaya',
            value: 'Biaya'                
        }, {
            name: 'Pendaftaran',
            value: 'Pendaftaran'
        }, {
            name: 'Lain-lain',
            value: 'Lain-lain'
        }]
    },   
    {
        name: "visitorName",
        label: "Nama",
        type: null,
        rules: [
            {
                required: true,
                message: 'Form tidak boleh kosong!',
            }
        ]
    },
    {
        name: "telephoneNumber",
        label: "Nomor Telpon",
        type: null,
        rules: [
            {
                required: true,
                message: 'Jenis kelamin belum dipilih!',
            }
        ]
    }, {
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
]