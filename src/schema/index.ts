import UserSchema from "./UserSchema"
import BookSchema from "./BookSchema"
import PageSchema from "./PageSchema";
import CategorySchema from "./CategorySchema";
import LevelSchema from "./LevelSchema";
import LanguageSchema from "./LanguageSchema";
import SchoolSchema from "./SchoolSchema";
import SearchSchema from "./SearchSchema";
import SubjectSchema from "./SubjectSchema";
import SchoolTypeSchema from "./SchoolTypeSchema";
import CountrySchema from "./CountrySchema";

const schema =    UserSchema 
                + BookSchema 
                + PageSchema
                + CategorySchema
                + LevelSchema
                + LanguageSchema
                + SchoolTypeSchema
                + SchoolSchema
                + SearchSchema
                + SubjectSchema
                + CountrySchema

export default schema;