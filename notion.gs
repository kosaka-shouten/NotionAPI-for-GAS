let NOTIONTOKEN = "";

function setToken(token){
  NOTIONTOKEN = token;
}

function queryDatabase(database_id, query){
  const options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Notion-Version':'2021-05-13',
      'Authorization':"Bearer "+NOTIONTOKEN
    },
    payload: JSON.stringify(query)
  };
  
  let url = 'https://api.notion.com/v1/databases/'+database_id+'/query';
  let response = UrlFetchApp.fetch(url, options);
  let json = JSON.parse(response);
  console.log(json);

  return json;
}

function createPage(object, database_id){
  object["parent"] = {
    "database_id": database_id
  };
  const options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Notion-Version':'2021-05-13',
      'Authorization':"Bearer "+NOTIONTOKEN
    },
    payload: JSON.stringify(object)
  };
  
  let response = UrlFetchApp.fetch('https://api.notion.com/v1/pages', options);

  return response;
}

function updatePage(object, page_id){
  const options = {
    method: 'patch',
    headers: {
      'Content-Type': 'application/json',
      'Notion-Version':'2021-05-13',
      'Authorization':"Bearer "+NOTIONTOKEN
    },
    payload: JSON.stringify(object)
  };

  let response = UrlFetchApp.fetch('https://api.notion.com/v1/pages/'+page_id, options);

  return response;
}

function queryPage(page_id, query){
  const options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Notion-Version':'2021-05-13',
      'Authorization':"Bearer "+NOTIONTOKEN
    },
    payload: JSON.stringify(query)
  };
  
  let url = 'https://api.notion.com/v1/pages/'+page_id+'/query';
  let response = UrlFetchApp.fetch(url, options);
  let json = JSON.parse(response);

  return json;
}

function updateBlock(object, block_id){
  const options = {
    method: 'patch',
    headers: {
      'Content-Type': 'application/json',
      'Notion-Version':'2022-02-22',
      'Authorization':"Bearer "+NOTIONTOKEN
    },
    payload: JSON.stringify(object)
  };

  let response = UrlFetchApp.fetch('https://api.notion.com/v1/blocks/'+block_id, options);

  return response;
}

function queryBlock(block_id){
  const options = {
    method: 'post',
    headers: {
      'Notion-Version':'2022-02-22',
      'Authorization':"Bearer "+NOTIONTOKEN
    }
  };
  
  let url = 'https://api.notion.com/v1/blocks/'+block_id+'/children?page_size=100';
  let response = UrlFetchApp.fetch(url, options);
  let json = JSON.parse(response);

  return json;
}