package controllers.implementacion;

import com.fasterxml.jackson.databind.JsonNode;
import controllers.contratos.ISaldoBodega;
import models.SaldoBodega;
import play.db.jpa.Transactional;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;

/**
 * Created by JoséLuis on 03/04/2016.
 */
public class SaldoBodegasController extends Controller {
    private static ISaldoBodega saldoBodegas = new SaldoBodegas();

    @Transactional
    public Result getSaldoBodegas() {
        return ok(Json.toJson(saldoBodegas.getSaldoBodegas()));
    }
    @Transactional
    public Result getSaldoBodegaById(long id) {
        return ok(Json.toJson(saldoBodegas.getSaldoBodegaById(id)));
    }
    @Transactional
    public Result getSaldoBodegasByBodegaId(long bodegaId) {
        return ok(Json.toJson(saldoBodegas.getSaldoBodegasByBodegaId(bodegaId)));
    }
    @Transactional
    public Result getSaldoBodegasByProductoId(long productoId) {
        return ok(Json.toJson(saldoBodegas.getSaldoBodegasByProductoId(productoId)));
    }

    @Transactional
    public Result save() {

        JsonNode json = request().body().asJson();
        JsonNode respuesta = Json.parse("{\"errorCode\":\"1\",\"desCode\":\"Error en productos\"}");
        SaldoBodega saldoBodega = Json.fromJson(json,SaldoBodega.class);
        if(saldoBodega!=null){
            saldoBodega= saldoBodegas.save(saldoBodega);
            respuesta=Json.toJson(saldoBodega);
        }
        return ok(respuesta);
    }

    @Transactional
    public Result delete(long id) {

        JsonNode respuesta = Json.parse("{\"errorCode\":\"1\",\"desCode\":\"Error en bodegas\"}");
        SaldoBodega saldoBodega= saldoBodegas.delete(id);
        if(saldoBodega!=null){
            respuesta=Json.toJson(saldoBodega);
        }
        return ok(respuesta);
    }

}