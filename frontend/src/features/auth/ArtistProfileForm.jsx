


import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Button,
  Input,
  Select,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui'
import { use } from 'react'
import { set } from 'zod'
import { de } from 'zod/v4/locales'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

const CATEGORIES = [
    { value: 'musica_en_vivo', label: 'Música en vivo' },
    { value: 'teatro', label: 'Teatro' },
    { value: 'talleres', label: 'Talleres' },
    { value: 'dj_set', label: 'DJ' },
    { value: 'otros', label: 'Otros' },
    { value: 'fotografia', label: 'Fotografía' },
    { value: 'animacion_infantil', label: 'Animación infantil' }
]


export default function ArtistProfileForm({userId, onSuccess}) {
    const [serverError, setServerError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [imagePreview, setImagePreview] = useState(null)
    const [imageFile, setImageFile] = useState(null)
    const fileInputRef = useRef(null)

    const form = useForm({
        resolver: zodResolver(artistProfileSchema),
        defaultValues: {
        bio: '',
        contactPhone: '',
        contactSocial: '',
        baseRate: '',
        city: '',
        coverageArea: '',
        category: '',
        image: '',
        },
    })

    const handleImageChange = (e) => {
        const file = e.target.files?.[0]
        if (!file) return
        setImageFile(file)
        setImagePreview(URL.createObjectURL(file))
    }

    const updloadImageToS3 = async (file) => {
        // subir la imagen a s3
    }

    const onSubmit = async (data) => {
        setServerError(null)
        setIsLoading(true)
        try {
            let imageUrl = data.image
            if (imageFile) {
                imageUrl = await uploadImageToS3(imageFile)
            }
            const response = await fetch(`${API_BASE_URL}/onboarding/artist-profile`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                credentials: 'include',
                body: JSON.stringify({...data,image: imageUrl})
            })
            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.message || 'Error al actualizar el perfil')
            }
            const result = await response.json()
            onSuccess?.(result)

        } catch (error) {
            setServerError(error instanceof Error ? error.message : 'Error al actualizar el perfil')
        } finally {
            setIsLoading(false)
        }}
        return(
            <>
            </>
        )
}