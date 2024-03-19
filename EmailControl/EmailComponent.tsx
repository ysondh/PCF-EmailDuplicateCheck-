import * as React from "react";
import { Field, Input } from "@fluentui/react-components";
import { MailRegular} from "@fluentui/react-icons"

export interface IEmailControlComponentProps {
    currentValue?: string;
    onValueChange?: (value?: string) => void; 
    checkemail?: ()=> Promise<number>   
}




export const EmailComponent: React.FunctionComponent<IEmailControlComponentProps> = (props) =>{
const [value,setValue] = React.useState(props.currentValue);
const [error,setError] = React.useState<'error' | 'warning' | 'success' | 'none'>('none');
const [errormessage,setErrormessage] = React.useState<any>('')


const checkerror =  async ()=> {
    try{
        if(props.checkemail){
            const count = await props.checkemail()
            if(count==0){
                setError('none')
                setErrormessage('')
            } else{
                setError('error')
                setErrormessage("This email already exists")
            }
        }
        
    } catch(e){
        console.error("Error on API Call to DV",e)

    }

}



const onChange = React.useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = ev.target.value;
        setValue(newValue);
        if (props.onValueChange) {
            props.onValueChange(newValue);
            checkerror();
        }
    },
    [value]
)

return (


    <Field
    

        validationState={error}
        validationMessage={errormessage}

    >
        <Input

            value={value}
            onChange= {onChange}
            contentAfter={<MailRegular onClick={ () => {
                window.location.href = `mailto:${props.currentValue}`;
            }}/>}
        />
    </Field>
);


} 
