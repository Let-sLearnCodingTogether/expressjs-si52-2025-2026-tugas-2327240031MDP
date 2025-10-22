import mongoose from 'mongoose';

const aktivitasOlahragaSchema = new mongoose.Schema(
    {
        activityType: {
            type: String,
            trim: true,
            required: true
        },
        durationInMinutes: {
            type: Number,
            required: true
        },
        date: {
            type: Date,
            required: true
        }
    },
    { 
        timestamps: true 
    }
)

const aktivitasOlahragaModel = new mongoose.model("Aktivitas", aktivitasOlahragaSchema);
export default aktivitasOlahragaModel;