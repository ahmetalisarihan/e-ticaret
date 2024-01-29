"use client";
import React from 'react'
import Heading from '../general/Heading';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Input from "../general/Input"
import Checkbox from '../general/CheckBox';
import { FaComputer } from 'react-icons/fa6';
import { GiBallerinaShoes } from 'react-icons/gi';
import { FaTabletAlt } from 'react-icons/fa';
import { CiMicrophoneOn } from 'react-icons/ci';
import ChoiceInput from '../general/ChoiceInput';
import Button from '../general/Button';



const CreateForm = () => {

    const categoryList = [
        {
           name: "Bilgisayar",
           icon: FaComputer
        },
        {
           name: "Ayakkabı",
           icon: GiBallerinaShoes
        },
        {
           name: "Tablet",
           icon: FaTabletAlt
        },
        {
           name: "Mikrofon",
           icon: CiMicrophoneOn
        },
        {
           name: "Ayakkabı1",
           icon: FaComputer
        },
        {
           name: "Ayakkabı2",
           icon: FaComputer
        },
    ]

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
     } = useForm<FieldValues>({
        defaultValues: {
           name: "",
           description: "",
           brand: "",
           category: "",
           price: "",
           image: "",
           inStock: false
        }
     })
     const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        console.log("data", data)
        }
        const category = watch('category')

        const setCustomValue = (id: string, value: any) => {
           setValue(id, value, {
              shouldDirty: true,
              shouldTouch: true,
              shouldValidate: true
           })
        }

  return (
    <div><Heading text="ÜRÜN OLUSTUR" center />
    <Input
            placeholder="Ad"
            type="text"
            id="name"
            register={register}
            errors={errors}
            required
         />
         <Input
            placeholder="Acıklama"
            type="text"
            id="description"
            register={register}
            errors={errors}
            required
         />
         <Input
            placeholder="Marka"
            type="text"
            id="brand"
            register={register}
            errors={errors}
            required
         />
         <Input
            placeholder="Fiyat"
            type="number"
            id="price"
            register={register}
            errors={errors}
            required
         />
         <Checkbox
            id="inStock"
            label="Ürün Stokta Mevcut mu ?"
            register={register}
         />
                  <div className="flex flex-wrap gap-3">
            {
               categoryList.map((cat, i) => (
                  <ChoiceInput
                     key={i}
                     icon={cat.icon}
                     text={cat.name}
                     onClick={(category) => setCustomValue("category", category)}
                     selected={category == cat.name}
                  />
               ))
            }
         </div>
         <Button text="Ürün Olustur" onClick={handleSubmit(onSubmit)} />
    </div>
    
  )
}

export default CreateForm