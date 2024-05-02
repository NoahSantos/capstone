import mongoose, {Schema, models} from 'mongoose';

const userSchema = new Schema(
    {
        email:{
            type: String,
            required: true,
        },
        name:{
            type: String,
            // required: true,
        }
    }, {timestamps:true}
)

const User = models.Students || mongoose.model('Students', userSchema);
module.exports = User;