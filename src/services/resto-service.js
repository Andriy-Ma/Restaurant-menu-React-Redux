export default class RestoService{
    _apiBase = 'http://localhost:3000';
    async getResourses(url){
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok){
            throw new Error(`could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }
    async getMenuItems() {
        return await this.getResourses('/menu/');
        
    };
}