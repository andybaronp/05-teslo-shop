import jwt from 'jsonwebtoken'

export const signToken = (_id: string, email: string) => {
    if (!process.env.JWT_SECRET_SEDD) {
        throw new Error("Verifique las variables de entorno")
    }

    return jwt.sign(
        //Paylodas
        { _id, email },
        //Seed
        process.env.JWT_SECRET_SEDD,
        //Opciones
        {
            expiresIn: '30d'
        }

    )
}