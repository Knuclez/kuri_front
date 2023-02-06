#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

#[tauri::command]
async fn try_login(username: String, pass: String) -> String{
    let url = format!("http://localhost:8080/user/login/{}/{}",username, pass);
    let respuesta =  match reqwest::get(url).await{
        Ok(response) => response,
        Err(error) => panic!("Problema trayendo la request: {}", error),
    };

    let body = match respuesta.text().await{
        Ok(cu) => cu,
        Err(error) => panic!("Problema desempaquetando la respuesta: {}", error),
    };

    return body;
}

#[tauri::command]
async fn try_register(username: String, pass: String) -> String{
    let url = format!("http://localhost:8080/user/register/{}/{}",username, pass);
    let respuesta =  match reqwest::get(url).await{
        Ok(response) => response,
        Err(error) => panic!("Problema trayendo la request: {}", error),
    };

    let body = match respuesta.text().await{
        Ok(cu) => cu,
        Err(error) => panic!("Problema desempaquetando la respuesta: {}", error),
    };

    return body;
}

#[tauri::command]
async fn check_for_character(user_id: String) -> String{
    let url = format!("http://localhost:8080/user/{}/haves_character",user_id);
    let respuesta =  match reqwest::get(url).await{
        Ok(response) => response,
        Err(error) => panic!("Problema trayendo la request: {}", error),
    };

    let body = match respuesta.text().await{
        Ok(cu) => cu,
        Err(error) => panic!("Problema desempaquetando la respuesta: {}", error),
    };

    return body;
}

#[tauri::command]
async fn get_character(user_id: String) -> String{
    let url = format!("http://localhost:8080/user/{}/get_character",user_id);
    let respuesta =  match reqwest::get(url).await{
        Ok(response) => response,
        Err(error) => panic!("Problema trayendo la request: {}", error),
    };

    let body = match respuesta.text().await{
        Ok(cu) => cu,
        Err(error) => panic!("Problema desempaquetando la respuesta: {}", error),
    };

    return body;
}

#[tauri::command]
async fn create_character(user_id: String, life_point: bool, damage_point: bool, mana_point: bool) -> String{
    let url = format!("http://localhost:8080/user/{}/create_character/{}/{}/{}",user_id, life_point, damage_point, mana_point);
    let respuesta =  match reqwest::get(url).await{
        Ok(response) => response,
        Err(error) => panic!("Problema trayendo la request: {}", error),
    };

    let body = match respuesta.text().await{
        Ok(cu) => cu,
        Err(error) => panic!("Problema desempaquetando la respuesta: {}", error),
    };

    return body;
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![try_login,
                                                 try_register,
                                                 check_for_character,
                                                 get_character,
                                                 create_character])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
