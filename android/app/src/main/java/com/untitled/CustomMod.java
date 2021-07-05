/**
 * this class is handle apis needed
* */
package com.untitled;

import androidx.annotation.NonNull;
import com.android.volley.Request;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.untitled.helper.GeneralConnector;

import org.json.JSONException;

import java.util.HashMap;
import java.util.Map;

public class CustomMod extends ReactContextBaseJavaModule {
    String phoneNumber;
    public static String publicToken;
    private static ReactApplicationContext reactApplicationContext;
    private static GeneralConnector generalConnector = GeneralConnector.getInstance();

    CustomMod(ReactApplicationContext context) {
        super(context);
        reactApplicationContext = context;
    }

    @ReactMethod
    public void setVarCode(String number, Promise promise) {
        phoneNumber = number;
        Map<String, String> params = new HashMap();
        params.put("phone_number", number);
        generalConnector.jsonObjectRequestWithJasonRequest(Request.Method.POST, reactApplicationContext, "https://insurance.altibb.com/v1/auth/request-pin-code", params,promise);
    }

    @ReactMethod
    public void checkReq(String pin, Promise promise) {
        String url = "https://insurance.altibb.com/v1/auth/verify-pin-code";
        Map<String, String> params = new HashMap();
        params.put("phone_number", phoneNumber);
        params.put("pin_code", pin);
        generalConnector.jsonObjectRequestWithJasonRequest(Request.Method.POST, reactApplicationContext, "https://insurance.altibb.com/v1/auth/verify-pin-code", params,promise);

    }

    @ReactMethod
    public void getUserInfo(String token,Promise promise) throws  JSONException {
        String url = "https://insurance.altibb.com/v1/users";
        Map<String, String> headers = new HashMap<>();
        headers.put("Authorization", "Bearer " + token);
        generalConnector.jsonArrayRequestWithHeader(Request.Method.GET, reactApplicationContext, "https://insurance.altibb.com/v1/users", headers,promise);
    }
    @ReactMethod
    public void createAcc(String insId, String policy_number, String DOB, Promise promise) {
        Map<String, String> params = new HashMap();
        params.put("insurance_id", insId);
        params.put("policy_number", policy_number);
        params.put("date_of_birth", DOB);
        params.put("registration_token", publicToken);
        System.out.println("--------------------"+insId+policy_number+DOB+publicToken);
        generalConnector.jsonObjectRequestWithJasonRequest(Request.Method.POST, reactApplicationContext, "https://insurance.altibb.com/v1/auth/register", params,promise);
    }

    @ReactMethod
    public void chartRecord(Promise promise) {
        generalConnector.jsonArrayRequest(Request.Method.GET, reactApplicationContext, "https://api.covidtracking.com/v1/states/current.json",promise);
    }

    @NonNull
    @Override
    public String getName() {
        return "androidConnector";
    }

}
