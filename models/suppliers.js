import mongoose from "mongoose";

const supplierSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        phone: String,
        companyName: String,
        gstNumber: String,
        address: String,
        city: String,
        state: String,
        country: String,
        status: String,
        deletedAt: Date,
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const Supplier = mongoose.model('Supplier', supplierSchema)

export default Supplier;
/**
 * | Field       | Type   |
| ----------- | ------ |
| name        | String |
| email       | String |
| phone       | String |
| companyName | String |
| gstNumber   | String |
| address     | String |
| city        | String |
| state       | String |
| country     | String |
| status      | String |
| deletedAt   | Date   |
| createdAt   | Date   |
| updatedAt   | Date   |

 */