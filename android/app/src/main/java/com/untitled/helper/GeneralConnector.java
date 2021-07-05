package com.untitled.helper;

import android.content.Context;

import com.android.volley.AuthFailureError;
import com.android.volley.Request;
import com.android.volley.Response;
import com.android.volley.toolbox.JsonArrayRequest;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;
import com.facebook.react.bridge.Promise;
import com.untitled.CustomMod;

import org.apache.log4j.Logger;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

public class GeneralConnector {
    private static GeneralConnector instance;
    static Logger logger = Logger.getLogger(GeneralConnector.class.getName());

    private GeneralConnector() {
    }

    public static synchronized GeneralConnector getInstance() {
        return instance == null ? new GeneralConnector() : instance;
    }

    public void jsonObjectRequestWithJasonRequest(int rqType, Context context, String url, Map hashMap,Promise promise) {
/*
        logger.info("start jsonObjectRequestWithJasonRequest");
*/



        Map<String, String> params = new HashMap<>(hashMap);

        JSONObject jsonObject = new JSONObject(params);


        JsonObjectRequest request = new JsonObjectRequest(rqType, url, jsonObject, new Response.Listener<JSONObject>() {
            @Override
            public void onResponse(JSONObject response) {
                promise.resolve(response.toString());
                try {
                    CustomMod.publicToken= (String) response.get("registration_token");
                } catch (JSONException e) {
                    e.printStackTrace();
                }
            }
        }, error -> System.out.println("error in jsonObjectRequestWithJasonRequest method " + error));
        Volley.newRequestQueue(context).add(request);
    }

    public void jsonArrayRequest(int rqType, Context context, String url,Promise promise) {
/*
        logger.info("start jsonArrayRequest");
*/
        JsonArrayRequest request = new JsonArrayRequest(rqType, url, null, new Response.Listener<JSONArray>() {
            @Override
            public void onResponse(JSONArray response) {
                promise.resolve(response.toString());
            }
        }, error -> System.out.println("error in jsonArrayRequest method " + error));
        Volley.newRequestQueue(context).add(request);
    }

    public void jsonArrayRequestWithHeader(int rqType, Context context, String url, Map headerMap,Promise promise) {
/*
        logger.info("start jsonArrayRequestWithHeader");
*/
        JsonArrayRequest request = new JsonArrayRequest(rqType, url, null, new Response.Listener<JSONArray>() {
            @Override
            public void onResponse(JSONArray response) {
                try {
                    promise.resolve(response.get(0).toString());
                   // CustomMod.netPromise.resolve(response.get(0).toString());//ava.lang.NullPointerException: Attempt to invoke interface method 'void com.facebook.react.bridge.Promise.resolve(java.lang.Object)' on a null object reference
                                                                            // at com.untitled.helper.GeneralConnector$3.onResponse(GeneralConnector.java:73)
                } catch (JSONException e) {
                    System.out.println("");
                    e.printStackTrace();
                }

            }
        }, error -> System.out.println("error in jsonArrayRequestWithHeader method " + error)){
            @Override
            public Map<String, String> getHeaders() throws AuthFailureError {
                Map<String, String> headers = headerMap;
                return headers;
            }
        };
        Volley.newRequestQueue(context).add(request);
    }

}
