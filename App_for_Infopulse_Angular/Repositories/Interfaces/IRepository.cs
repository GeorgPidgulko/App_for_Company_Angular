﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace App_for_Infopulse_Angular.Server.Repositories.InterFaces
{
    interface IRepository<T> where T : class
    {
        T Get(long id);
        IQueryable<T> GetAll();
        IEnumerable<T> GetAllAsync(Func<T, bool> predicate);
        void Create(T item);
        void Update(T item);
        void Delete(long id);
    }
}
