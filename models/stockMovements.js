import { ObjectId } from 'mongodb';
import mongoose from 'mongoose'

const stockMovementSchema = new mongoose.Schema(
    {
        productId: {type: mongoose.Schema.Types.ObjectId, ref: 'Product', require: true },
        movementType: String,
        quantity: Number,
        previousStock: Number,
        currentStock: Number,
        referenceNumber: String,
        remarks: String,
        createdBy: String,
    },
    {
        timestamps: true,
        versionKey: false,
    }
)
const StockMovement = new mongoose.model('StockMovement', stockMovementSchema)

export default StockMovement;
