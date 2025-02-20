using InvBackend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace InvBackend.Controllers
{
    public class QrtRevController : Controller
    {
        // GET: QrtRevController
        public ActionResult Index()
        {
            AccessDAO accessMysqldb = new AccessDAO();

            List<QrtRevModel> Model = accessMysqldb.getAllData();

            return View(Model);
        }

        // GET: QrtRevController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: QrtRevController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: QrtRevController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: QrtRevController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: QrtRevController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: QrtRevController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: QrtRevController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
