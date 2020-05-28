export const dataForm = [
    {
        name: "visitorName",
        label: "Judul Konten",
        type: null,
        rules: [
            {
                required: true,
                message: 'Jumlah tidak boleh kosong!',
            }
        ]
    },
    {
        name: "purpose",
        label: "Jenis Konten",
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
        name: "checkbox",
        label: "Tersedia untuk",
        type: 'checkbox',
        rules: [
            {
                required: true,
                message: 'Form tidak boleh kosong!',
            }
        ],
        checkbox: [{
            name: 'Admin',
            value: 'Admin'                
        }, {
            name: 'Siswa',
            value: 'Siswa'
        }]
    }, 
    {
        name: "checkbox",
        type: 'checkbox',
        checkbox: [{
            name: 'Tersedia untuk semua kelas',
            value: 'All'                
        },]
    },
    {
        name: "purpose",
        label: "Kelas",
        type: 'select',
        rules: [
            {
                required: true,
                message: 'Form tidak boleh kosong!',
            }
        ],
        select: [{
            name: '1',
            value: '1'                
        }, {
            name: '2',
            value: '2'
        }]
    },
    {
        name: "purpose",
        label: "Sub Kelas",
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
        name: "dateEvent",
        label: "Tanggal Unggah",
        type: 'date',
        rules: [
            {
                required: true,
                message: 'Tanggal belum dipilih!',
            }
        ]
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