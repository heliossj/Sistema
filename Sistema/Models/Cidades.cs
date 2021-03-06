﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Sistema.Models
{
    public class Cidades : Pai
    {
        [Display(Name = "Cidade")]
        public string nomeCidade { get; set; }

        [Display(Name = "DDD")]
        public string ddd { get; set; }

        [Display(Name = "Sigla")]
        public string sigla { get; set; }

        public Select.Estados.Select Estado { get; set; }
    }
}