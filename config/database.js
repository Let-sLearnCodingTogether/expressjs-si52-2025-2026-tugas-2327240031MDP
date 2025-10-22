import mongoose from 'mongoose';

const database = async () => {
    try {
        console.log("Melakukan Koneksi Ke MongoDB")

        const response = await mongoose.connect("mongodb://127.0.0.1:27017/AktivitasOlahraga?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.8")

        console.log(`Koneksi ke MongoDB berhasil pada host : ${response.host}`);

    } catch (error) {
        console.error("Gagal terknoeki ke MongoDB");

        process.exit(1);
    }
}

export default database