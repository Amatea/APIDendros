


clientes.prototype.agregarcliente=function(req,done){
        console.log(req.body);
        var cliente = this.addQuotes(req.body.cliente_id);
        var razonsocial = this.addQuotes(req.body.razon_social);
        var nit = this.addQuotes(req.body.nit);
        var tipo = this.addQuotes(req.body.tipo);
        var correo = this.addQuotes(req.body.correo_electronico);
        var telefono = this.addQuotes(req.body.telefono);
        var direccion = this.addQuotes(req.body.direccion);
        var ciudad = this.addQuotes(req.body.ciudad);
        var fecha = this.addQuotes(req.body.fecha);
        var queryStr = "INSERT INTO clientes (`cliente_id`, `razon_social`, `nit`, `tipo`, `correo_electronico`, `telefono`, `direccion`, `ciudad`, `fecha`) VALUES ("+cliente+", "+razonsocial+", "+nit+", "+tipo+", "+correo+", "+telefono+", "+direccion+", "+ciudad+",  "+fecha+");";
        console.log(queryStr);
        this.query(req,queryStr,done);

};

