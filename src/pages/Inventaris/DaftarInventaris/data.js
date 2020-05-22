export const dataForm = [
    {
        name: "purpose",
        label: "Kategori",
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
        name: "purpose",
        label: "Nama Barang",
        type: 'select',
        rules: [
            {
                required: true,
                message: 'Form tidak boleh kosong!',
            }
        ],
        select: [{
            name: 'A',
            value: 'B'                
        }, {
            name: 'A',
            value: 'B'
        }]
    },
    {
        name: "purpose",
        label: "Suplier",
        type: 'select',
        rules: [
            {
                required: true,
                message: 'Form tidak boleh kosong!',
            }
        ],
        select: [{
            name: 'A',
            value: 'B'                
        }, {
            name: 'A',
            value: 'B'
        }]
    },
    {
        name: "purpose",
        label: "Toko",
        type: 'select',
        rules: [
            {
                required: true,
                message: 'Form tidak boleh kosong!',
            }
        ],
        select: [{
            name: 'A',
            value: 'B'                
        }, {
            name: 'A',
            value: 'B'
        }]
    },
    {
        name: "visitorName",
        label: "Jumlah",
        type: null,
        rules: [
            {
                required: true,
                message: 'Jumlah tidak boleh kosong!',
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