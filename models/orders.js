import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        orderNumber: String,
        customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true},
        products: Array,
        totalAmount: Number,
        discountAmount: Number,
        taxAmount: Number,
        finalAmount: Number,
        paymentMethod: String,
        paymaentStatus: String,
        orderStatus: String,
        shippingAddress: Object,
        notes: String,
        deletedAt: Date,
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const Order = mongoose.model('Order', orderSchema);
export default Order;
/**
 * | Field           | Type     |
| --------------- | -------- |
| orderNumber     | String   |
| customerId      | ObjectId |
| products        | Array    |
| totalAmount     | Number   |
| discountAmount  | Number   |
| taxAmount       | Number   |
| finalAmount     | Number   |
| paymentMethod   | String   |
| paymentStatus   | String   |
| orderStatus     | String   |
| shippingAddress | Object   |
| notes           | String   |
| deletedAt       | Date     |
| createdAt       | Date     |
| updatedAt       | Date     |

 */