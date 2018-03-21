package it.disim.univaq.alexanderperucci.services.reds.common.spring.configuration;

import java.text.SimpleDateFormat;
import java.util.Date;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.support.WebBindingInitializer;
import org.springframework.web.context.request.WebRequest;

public class MyWebBindingInitializer implements WebBindingInitializer {

    @Value("#{cfgproperties.dateformat}")
    private String dateFormat;

    @Override
    public void initBinder(WebDataBinder binder, WebRequest request) {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(dateFormat);
        simpleDateFormat.setLenient(false);
        binder.registerCustomEditor(Date.class, new CustomDateEditor(simpleDateFormat, true));
    }
}