export const dataForm = [
    {
        name: "visitorName",
        label: "Nomor Surat",
        type: null,
        rules: [
            {
                required: true,
                message: 'Nomor Surat tidak boleh kosong!',
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
        name: "timeIn",
        label: "Perihal",
        type: null,
        rules: [
            {
                required: true,
                message: 'Perihal tidak boleh kosong!',
            }
        ]
    }, 
    {
        name: "timeIn",
        label: "Pengirim",
        type: null,
        rules: [
            {
                required: true,
                message: 'Pengirim tidak boleh kosong!',
            }
        ]
    }, 
    {
        name: "timeIn",
        label: "Penerima",
        type: null,
        rules: [
            {
                required: true,
                message: 'Penerima tidak boleh kosong!',
            }
        ]
    }, 
    {
        name: "purpose",
        label: "Tipe Surat",
        type: 'select',
        rules: [
            {
                required: true,
                message: 'Form tidak boleh kosong!',
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
    {
        name: "upload",
        label: "Dokumen",
        type: 'upload',
        rules: [
            {
                required: true,
                message: 'Form tidak boleh kosong!',
            }
        ]
    },
    {
        name: "timeIn",
        label: "Catatan",
        type: null,
    }, 
]