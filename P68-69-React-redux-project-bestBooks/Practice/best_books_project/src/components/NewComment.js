import Field from './Field'
import Textarea from './Textarea'
import Select from './Select'
import { useForm } from 'react-cool-form';
import { connect } from 'react-redux';
import { addComment } from '../store/booksReducer/BooksActionsCreator';


const NewComment = ({bookId, addCommentToBook}) => {

    const { form, use } = useForm({
        defaultValues: { name: '', text: '', note: '' },
        onSubmit: (values, { reset }) => {
            console.log('onSubmit', values)
            addCommentToBook(bookId, {...values, id:Date.now()})
            reset()
        }
    })

    const errors = use('errors', { errorWithTouched: true })

    return (
        <div className='w-75 mx-auto mt-5 text-start'>
            <h5>Add your comment</h5>
            <form ref={form} noValidate>
                <Field
                    label="Your name"
                    id="name"
                    name="name"
                    placeholder="type your name"
                    required
                    minLength = {4}
                    error={errors.name}
                >
                </Field>
                <Textarea
                    label="Your comment"
                    id="text"
                    name="text"
                    placeholder="type your comment"
                    required
                    error={errors.text}
                >
                </Textarea>
                <Select
                    label = "Your note"
                    id ="note"
                    name = "note"
                    required
                    error = {errors.note}
                >
                    <option value ="" disabled>Choice your note</option>
                    <option value = "1">1</option>
                    <option value = "2">2</option>
                    <option value = "3">3</option>
                    <option value = "4">4</option>
                    <option value = "5">5</option>
                </Select>
                <input type = "submit" className = "btn btn-dark w-100"/>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch =>{
    return{
        addCommentToBook: (bookId, comment) => dispatch(addComment(bookId, comment))
    }
}

export default connect(null, mapDispatchToProps)(NewComment)