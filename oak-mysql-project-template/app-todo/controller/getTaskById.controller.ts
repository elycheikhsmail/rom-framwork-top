import { Context, Status } from "../deps-managed.ts";
import { getDb } from "../../config/mysql/dbclient.ts";

export async function getTaskByIdController(ctx: Context) {
  // Default variable for minimise if else in code
  let isReady = true;
  let isObjExist = true;
  // Default variable  details in response when inspect behavur happed
  let details = "";

  // extract id
  const pathname = ctx.request.url.pathname;
  const urlData = pathname.split("/");
  const idStr = String(urlData.at(-1));
  const id = parseInt(idStr);

  // default tasks
  let tasks = [];

  // get data from db
  try {
    const sql = "SELECT  id , text FROM todo_tasks WHERE id = ? LIMIT 1";
    const args = [id];
    const db = await getDb();
    tasks = await db.query(sql, args);
    await db.close();
    if (tasks.length == 0) {
      isReady = false;
      details = "object dosn't exist";
      isObjExist = false;
    }
  } catch (_error) {
    isReady = false;
    details = "some errors happen in db connect or sql execution";
    console.log(_error);
  }

  if (isReady) {
    const task = tasks[0]
    ctx.response.body = {task}
  } 
  if (!isReady && !isObjExist) {
    ctx.response.status = Status.NotFound;
    ctx.response.body = { details };
  }
  if (!isReady && isObjExist) {
    ctx.response.status = Status.InternalServerError;
    ctx.response.body = { details };
  }
 
}
