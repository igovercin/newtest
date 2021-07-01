import React from 'react'
import { Formik,Form , Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import { FormField, Button ,Label} from 'semantic-ui-react'
import IGTextField from '../utilities/customFormControls/IGTextField'


export default function ProductAdd() {

    const initialValues={productName:"",unitPrice:10}
    const schema=Yup.object({
        productName:Yup.string().required("Ürün adı zorunlu"),


        
        unitPrice:Yup.number("Mutlaka sayı girilmeli").required("Ürün fiyatı zorunlu")


    })

    return (
        <div>
            <Formik initialValues={initialValues} validationSchema={schema}
            onSubmit={(values)=>{
                console.log(values)
            }}
            >
                <Form className="ui form">
                    <IGTextField name="productName" placeholder="Ürün adı"/>
                    <IGTextField name="unitPrice" placeholder="Ürün fiyatı"/>
                    <Button color="green" type="submit">Kaydet</Button>
                </Form>
            </Formik>
        </div>
    )
}
