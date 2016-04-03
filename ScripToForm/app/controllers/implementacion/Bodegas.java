package controllers.implementacion;

import controllers.contratos.IBodega;
import models.Bodega;
import play.db.jpa.JPA;
import play.db.jpa.Transactional;

import javax.persistence.EntityManager;
import java.sql.Date;
import java.util.List;

/**
 * Created by JoséLuis on 02/04/2016.
 */
public class Bodegas implements IBodega {

    @Transactional
    public List<Bodega> getBodegas() {
        return JPA.em().createNamedQuery("Bodega.findAll", Bodega.class ).getResultList();
    }

    @Transactional
    public Bodega getBodegaById(long id) {
        return JPA.em().createNamedQuery("Bodega.findById", Bodega.class ).setParameter("id",id).getSingleResult();
    }

    @Transactional
    public Bodega save(Bodega bodega) {
        EntityManager em = JPA.em();
        Bodega bodegaTmp;
        bodegaTmp = em.find(Bodega.class, bodega.getId());
        if(bodegaTmp == null){
            em.persist(bodega);
        }else{
            bodegaTmp.setNombre(bodega.getNombre());
            bodega = em.merge(bodegaTmp);
        }

        return bodega;
    }

    @Transactional
    public Bodega delete(long id) {
        EntityManager em = JPA.em();
        Bodega bodegaTmp = em.find(Bodega.class, id);
        if(bodegaTmp!=null) {
            em.remove(bodegaTmp);
        }
        return bodegaTmp;
    }
}
