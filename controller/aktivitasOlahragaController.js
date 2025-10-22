import aktivitasOlahragaModel from "../models/aktivitasOlahragaModel";

export const listAktivitasOlahraga = async (req, res) => {
    try {
        const data = await aktivitasOlahragaModel.find({})

        res.status(200).json({
            message : "Log Aktivitas Olahraga",
            data : data
        })

    } catch(error) {
        res.status(500).json({
            message : error.message,
            data : null
        })
    }
}

export const createAktivitasOlahraga = async (req, res) => {
    try {
        const request = req.body
        console.log(request);
        const response = await aktivitasOlahragaModel.create({
            activityType: request.activityType,
            durationInMinutes: request.durationInMinutes,
            date: request.date
        })

        res.status (201).json({
            message : "Data Log Aktivitas Olahraga Berhasil Ditambahkan",
            data : response
        })
    } catch (error) {
        res.status(500).json({
            message : error.message,
            data : null
        })
    }
}

export const updateAktivitasOlahraga = async (req, res) => {
    try {
        const id = req.params.id
        const request = req.body

        if (!id) {
            return res.status(500).json({
                message : "ID Tidak Ditemukan, masukan ID dengan benar",
                data : null
            })
        }

        const response = await aktivitasOlahragaModel.findByIdAndUpdate(id, {
            activityType: request.activityType,
            durationInMinutes: request.durationInMinutes,
            date: request.date
        })

        if (!response) {
            return res.status(404).json({
                message : "Data Log Aktivitas Olahraga gagal diupdate",
                data : null
            })
        }

        return res.status(200).json({
            message : "Data Log Aktivitas Olahraga Berhasil Diupdate",
            data : null
        })

    } catch (error) {
        res.status(500).json({
            message : error.message,
            data : null
        })
    }
}

export const deleteAktivitasOlahraga = async (req, res) => {
    try {
        const id = req.params.id
        
        if (!id) {
            return res.status(500).json({
                message : "ID Tidak Ditemukan, masukan ID dengan benar",
                data : null
            })
        }

        const response = await aktivitasOlahragaModel.findByAndDelete(id)

        if (response) {
            return res.status(200).jso({
                message : "Data Log Aktivitas Olahraga Berhasil Dihapus",
                data : null
            })
        }
        
        return res.status(404).json({
            message : "Data Log Aktivitas Olahraga Tidak Ditemukan",
            data : null
        })
        
    } catch (error) {
        res.status(500).json({
            message : error.message,
            data : null
        })
    }
}