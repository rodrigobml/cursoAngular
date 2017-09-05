import {Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'

export class ErrorHandler {
    static handleError(error: Response | any) {
        let errorMesssage: string
        if (error instanceof Response) {
            errorMesssage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`
        } else {
            errorMesssage = error.toString()
        }
    
        console.log(errorMesssage)
        return Observable.throw(errorMesssage)
    }
}