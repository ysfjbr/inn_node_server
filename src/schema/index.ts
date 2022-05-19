import UserSchema from "./UserSchema"
import BookSchema from "./BookSchema"
import PageSchema from "./PageSchema";

const schema = UserSchema + BookSchema + PageSchema

export default schema;