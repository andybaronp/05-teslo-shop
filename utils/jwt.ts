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



export const isValidToken = (token: string): Promise<string> => {
    if (!process.env.JWT_SECRET_SEDD) {
        throw new Error("Verifique las variables de entorno")
    }

    return new Promise((resolve, reject) => {

        try {
            jwt.verify(token, process.env.JWT_SECRET_SEDD || '', (err, payload) => {
                if (err) return reject('JWT no valido')
                const { _id } = payload as { _id: string }

                resolve(_id)
            })

        } catch (error) {
            reject('JWT no valido')
        }

    })
}