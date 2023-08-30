
const serv = {
    info: [
        {
            id: 1,
            name: "Negocios Internacionales",
            img: `data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21h18M9 8h1m-1 4h1m-1 4h1m4-8h1m-1 4h1m-1 4h1M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/></svg>`,
            descrip: ""
        },
        {
            id: 2,
            name: "Inversiones Extrangeras",
            img: `data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 1024 1024"><path fill="currentColor" d="M640 832H64V640a128 128 0 1 0 0-256V192h576v160h64V192h256v192a128 128 0 1 0 0 256v192H704V672h-64v160zm0-416v192h64V416h-64z"/></svg>`,
            descrip: ""
        },
        {
            id: 3,
            name: "Propiedad Intelectual",
            img: `data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 15 15"><path fill="currentColor" d="M4.5 8.5H4a.5.5 0 0 0 .5.5v-.5Zm4 0V9a.5.5 0 0 0 .5-.5h-.5Zm0-2.5H9a.5.5 0 0 0-.146-.354L8.5 6Zm-2-2l.354-.354a.5.5 0 0 0-.708 0L6.5 4Zm-2 2l-.354-.354A.5.5 0 0 0 4 6h.5Zm10.354 8.146l-4-4l-.708.708l4 4l.708-.708ZM6.5 12A5.5 5.5 0 0 1 1 6.5H0A6.5 6.5 0 0 0 6.5 13v-1ZM12 6.5A5.5 5.5 0 0 1 6.5 12v1A6.5 6.5 0 0 0 13 6.5h-1ZM6.5 1A5.5 5.5 0 0 1 12 6.5h1A6.5 6.5 0 0 0 6.5 0v1Zm0-1A6.5 6.5 0 0 0 0 6.5h1A5.5 5.5 0 0 1 6.5 1V0Zm-2 9h4V8h-4v1ZM9 8.5V6H8v2.5h1Zm-.146-2.854l-2-2l-.708.708l2 2l.708-.708Zm-2.708-2l-2 2l.708.708l2-2l-.708-.708ZM4 6v2.5h1V6H4Z"/></svg>`,
            descrip: ""
        },
        {
            id: 4,
            name: "Derecho Laboral",
            img: `data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20h10M6 6l6-1l6 1m-6-3v17m-3-8L6 6l-3 6a3 3 0 0 0 6 0m12 0l-3-6l-3 6a3 3 0 0 0 6 0"/></svg>`,
            descrip: ""
        },
        {
            id: 5,
            name: "Derecho Civil",
            img: `data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256"><path fill="currentColor" d="M208 28H72a28 28 0 0 0-28 28v168a4 4 0 0 0 4 4h144a4 4 0 0 0 0-8H52v-4a20 20 0 0 1 20-20h136a4 4 0 0 0 4-4V32a4 4 0 0 0-4-4Zm-4 160H72a27.94 27.94 0 0 0-20 8.42V56a20 20 0 0 1 20-20h132Z"/></svg>`,
            descrip: ""
        },
        {
            id: 6,
            name: "Contratación Pública",
            img: `data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512"><path fill="currentColor" d="M256 33c-20.835 0-39 20.24-39 47s18.165 47 39 47s39-20.24 39-47s-18.165-47-39-47zM110.258 54.934l-16.99 8.496c14.917 22.147 32.213 47.013 49.76 68.947c19.707 24.634 39.95 45.048 52.997 51.572l4.975 2.488v39.478c27.13 3.608 46.516 4.982 67.875 4.09c-.66-.49-1.316-.98-1.95-1.48c-4.915-3.88-9.18-8.206-12.5-12.856c-5.87-.587-10.577-4.374-13.392-8.65c-3.063-4.65-4.57-10.242-4.57-16.262s1.507-11.612 4.57-16.264c3.064-4.65 8.364-8.736 14.967-8.736s11.903 4.085 14.967 8.736c3.063 4.652 4.57 10.244 4.57 16.264s-1.507 11.612-4.57 16.263c-.06.094-.13.185-.192.277c1.92 2.358 4.335 4.758 7.303 7.1c6.283 4.962 14.722 9.46 24.75 12.66c2.65-.324 5.366-.67 8.172-1.04v-39.58l4.975-2.488c13.048-6.525 33.29-26.94 52.998-51.573c17.546-21.934 34.842-46.8 49.76-68.947l-16.99-8.496C355.066 101.422 307.792 145 256 145s-99.067-43.578-145.742-90.066zm29.094 179.93l12.152 60.763c101.057 9.362 107.935 9.362 208.992 0l12.147-60.734c-110.08 17.448-123.22 17.163-233.29-.03zm39.244 81.335l13.35 106.8h128.11l13.348-106.8c-67.76 6.032-87.047 6.032-154.808 0zM137 441v20h238v-20H137zM16 478v18h480v-18H16z"/></svg>`,
            descrip: ""
        },
        {
            id: 7,
            name: "Derecho Constituconal",
            img: `data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.525q0-.35.113-.675t.337-.6L4.7 3.725q.275-.35.687-.538T6.25 3h11.5q.45 0 .863.188t.687.537l1.25 1.525q.225.275.338.6t.112.675V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM16 8H8v8l4-2l4 2V8Z"/></svg>`,
            descrip: ""
        },
        {
            id: 8,
            name: "Derecho Maritimo",
            img: `data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m16.926 19.381l-4.302 1.414a2 2 0 0 1-1.248 0L7.074 19.38a4 4 0 0 1-2.623-2.794L3 11l9 1l9-1l-1.451 5.587a4 4 0 0 1-2.623 2.794Z"/><path d="M6.497 7.257A2 2 0 0 1 8.354 6h7.292a2 2 0 0 1 1.857 1.257L19 11l-7 1l-7-1l1.497-3.743ZM12 3v3m-1-3h2m-1 9v4"/></g></svg>`,
            descrip: ""
        },
        {
            id: 9,
            name: "Legislación de Seguros y Siniestros",
            img: `data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512"><path fill="currentColor" d="M405 491V192l-21-43l-21 43v299q0 21 21 21t21-21zM491 0H21Q12 0 6 6T0 21v320h320v-42H43V107h426v192h-21v42h64V21q0-9-6-15t-15-6zm-22 64H43V43h426v21zM85 149h235v43H85v-43zm0 64h214v43H85v-43z"/></svg>`,
            descrip: ""
        },
        {
            id: 10,
            name: "Derecho Migratorio",
            img: `data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256"><path fill="currentColor" d="m239.43 133l-32-80a8 8 0 0 0-7.43-5a8.27 8.27 0 0 0-1.73.21L136 62V40a8 8 0 0 0-16 0v25.58L54.27 80.21a8 8 0 0 0-5.7 4.79l-32 80a7.92 7.92 0 0 0-.57 3c0 23.31 24.54 32 40 32s40-8.69 40-32a7.92 7.92 0 0 0-.57-3L66.92 93.77L120 82v126h-16a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16h-16V78.42l51-11.32l-26.43 65.9a7.92 7.92 0 0 0-.57 3c0 23.31 24.54 32 40 32s40-8.69 40-32a7.92 7.92 0 0 0-.57-3Zm-160 35H32.62L56 109.54Zm97.24-32L200 77.54L223.38 136Z"/></svg>`,
            descrip: ""
        },
        {
            id: 11,
            name: "Seguros y Reseguros",
            img: `data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M7 15h2c0 1.08 1.37 2 3 2s3-.92 3-2c0-1.1-1.04-1.5-3.24-2.03C9.64 12.44 7 11.78 7 9c0-1.79 1.47-3.31 3.5-3.82V3h3v2.18C15.53 5.69 17 7.21 17 9h-2c0-1.08-1.37-2-3-2s-3 .92-3 2c0 1.1 1.04 1.5 3.24 2.03C14.36 11.56 17 12.22 17 15c0 1.79-1.47 3.31-3.5 3.82V21h-3v-2.18C8.47 18.31 7 16.79 7 15Z"/></svg>`,
            descrip: ""
        },
        {
            id: 12,
            name: "Propiedad Intelectual",
            img: `data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 15 15"><path fill="currentColor" d="M4.5 8.5H4a.5.5 0 0 0 .5.5v-.5Zm4 0V9a.5.5 0 0 0 .5-.5h-.5Zm0-2.5H9a.5.5 0 0 0-.146-.354L8.5 6Zm-2-2l.354-.354a.5.5 0 0 0-.708 0L6.5 4Zm-2 2l-.354-.354A.5.5 0 0 0 4 6h.5Zm10.354 8.146l-4-4l-.708.708l4 4l.708-.708ZM6.5 12A5.5 5.5 0 0 1 1 6.5H0A6.5 6.5 0 0 0 6.5 13v-1ZM12 6.5A5.5 5.5 0 0 1 6.5 12v1A6.5 6.5 0 0 0 13 6.5h-1ZM6.5 1A5.5 5.5 0 0 1 12 6.5h1A6.5 6.5 0 0 0 6.5 0v1Zm0-1A6.5 6.5 0 0 0 0 6.5h1A5.5 5.5 0 0 1 6.5 1V0Zm-2 9h4V8h-4v1ZM9 8.5V6H8v2.5h1Zm-.146-2.854l-2-2l-.708.708l2 2l.708-.708Zm-2.708-2l-2 2l.708.708l2-2l-.708-.708ZM4 6v2.5h1V6H4Z"/></svg>`,
            descrip: ""
        },
        {
            id: 13,
            name: "Litigio Internacional",
            img: `data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20h10M6 6l6-1l6 1m-6-3v17m-3-8L6 6l-3 6a3 3 0 0 0 6 0m12 0l-3-6l-3 6a3 3 0 0 0 6 0"/></svg>`,
            descrip: ""
        },
        {
            id: 14,
            name: "Legislación FIFA",
            img: `data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256"><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm76.52 147.42H170.9l-9.26-12.76l12.63-36.78l15-4.89l26.24 20.13a87.38 87.38 0 0 1-10.99 34.3Zm-164-34.3L66.71 117l15 4.89l12.63 36.78l-9.24 12.75H51.48a87.38 87.38 0 0 1-11.01-34.3Zm10-50.64l5.51 18.6l-15.32 11.69a87.33 87.33 0 0 1 9.72-30.29ZM109 152l-11.46-33.35L128 97.71l30.46 20.94L147 152Zm91.07-46.92l5.51-18.6a87.33 87.33 0 0 1 9.72 30.29Zm-6.2-35.38l-9.51 32.08l-15.07 4.89L136 83.79V68.21l29.09-20a88.58 88.58 0 0 1 28.77 21.49Zm-47.8-27.83L128 54.29l-18.07-12.42a88.24 88.24 0 0 1 36.14 0Zm-55.16 6.34l29.09 20v15.58l-33.28 22.88l-15.07-4.89l-9.51-32.08a88.58 88.58 0 0 1 28.77-21.49ZM63.15 187.42h20.37l7.17 20.27a88.4 88.4 0 0 1-27.54-20.27ZM110 214.13l-11.88-33.42l9.23-12.71h41.3l9.23 12.71l-11.83 33.42a88 88 0 0 1-36.1 0Zm55.36-6.44l7.17-20.27h20.37a88.4 88.4 0 0 1-27.59 20.27Z"/></svg>`,
            descrip: ""
        },
        {
            id: 15,
            name: "Derecho Penal",
            img: `data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256"><path fill="currentColor" d="m239.43 133l-32-80a8 8 0 0 0-7.43-5a8.27 8.27 0 0 0-1.73.21L136 62V40a8 8 0 0 0-16 0v25.58L54.27 80.21a8 8 0 0 0-5.7 4.79l-32 80a7.92 7.92 0 0 0-.57 3c0 23.31 24.54 32 40 32s40-8.69 40-32a7.92 7.92 0 0 0-.57-3L66.92 93.77L120 82v126h-16a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16h-16V78.42l51-11.32l-26.43 65.9a7.92 7.92 0 0 0-.57 3c0 23.31 24.54 32 40 32s40-8.69 40-32a7.92 7.92 0 0 0-.57-3Zm-160 35H32.62L56 109.54Zm97.24-32L200 77.54L223.38 136Z"/></svg>`,
            descrip: ""
        }
    ]
}

export default serv