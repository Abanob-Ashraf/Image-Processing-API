import express, {Request, Response} from 'express'
import path from 'path'
import images from '../data/images'
import fs, { existsSync } from 'fs'

const getImages = ((req: Request, res: Response)=> {
    const name = req.query.name as string;
    const imgLocation = path.resolve('./') + `/images/full/${name}.jpg`
    const image = images.includes(name);

    if (name === undefined){
        return res.status(400).send('Bad request, name is required');
    }
    if (image === false){
        return res.status(404).send('resource not found')
    }
    if(existsSync(imgLocation)=== false){
        return res.status(404).send('resource not found')
    }
    res.sendFile(imgLocation)
})

const postImage = ((req: Request, res: Response)=> {

})

export default getImages