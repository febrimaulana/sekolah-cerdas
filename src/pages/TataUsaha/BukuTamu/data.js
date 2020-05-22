export const dataForm = [
    {
        name: "purpose",
        label: "Tujuan",
        type: 'select',
        rules: [
            {
                required: true,
                message: 'Form tidak boleh kosong!',
            }
        ],
        select: [{
            name: 'Seminar',
            value: 'Seminar'                
        }, {
            name: 'Event',
            value: 'Event'
        }, {
            name: 'Workshop',
            value: 'Workshop'
        }]
    },   
    {
        name: "visitorName",
        label: "Nama Pengunjung",
        type: null,
        rules: [
            {
                required: true,
                message: 'Nama Pengunjung tidak boleh kosong!',
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
                message: 'Nomor Telepon Tidak Boleh Kosong',
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
    }, {
        name: "timeIn",
        label: "Masuk",
        type: 'time',
        rules: [
            {
                required: true,
                message: 'Jam belum dipilih!',
            }
        ]
    }, {
        name: "timeOut",
        label: "Keluar",
        type: 'time',
        rules: [
            {
                required: true,
                message: 'Jam belum dipilih!',
            }
        ]
    }, 
]