export class Request{
   
  
  message:string

    public getMessage(): string {
        return this.message;
    }

    public setMessage(message: string): void {
        this.message = message;
    }


    constructor(message:string){
      this.message=message
    }


}