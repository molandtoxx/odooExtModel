/**
 *    Copyright (C) 2019 SuXueFeng
 *
 *    This program is free software: you can redistribute it and/or modify
 *    it under the terms of the GNU Affero General Public License as
 *    published by the Free Software Foundation, either version 3 of the
 *    License, or (at your option) any later version.
 *
 *    This program is distributed in the hope that it will be useful,
 *    but WITHOUT ANY WARRANTY; without even the implied warranty of
 *    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *    GNU Affero General Public License for more details.
 *
 *    You should have received a copy of the GNU Affero General Public License
 *    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 **/

odoo.define('odoo.wage.employee.tax.details.tree.button', function (require) {
    "use strict";

    let ListController = require('web.ListController');
    let ListView = require('web.ListView');
    let viewRegistry = require('web.view_registry');

    let OdooWageManageTaxDetailsViewController = ListController.extend({
        buttons_template: 'OdooWageManageListView.wage_employee_tax_details_buttons',
        renderButtons: function () {
            this._super.apply(this, arguments);
            if (this.$buttons) {
                let self = this;
                this.$buttons.on('click', '.wage_employee_tax_details_but_class', function () {
                    self.do_action({
                        type: 'ir.actions.act_window',
                        res_model: 'wage.employee.tax.details.transient',
                        target: 'new',
                        views: [[false, 'form']],
                        context: [],
                    },{
                        on_reverse_breadcrumb: function () {
                            self.reload();
                        },
                          on_close: function () {
                            self.reload();
                        }
                     });
                });
            }
        }
    });

    let OdooWageTaxDetailsListView = ListView.extend({
        config: _.extend({}, ListView.prototype.config, {
            Controller: OdooWageManageTaxDetailsViewController,
        }),
    });

    viewRegistry.add('compute_wage_employee_tax_details', OdooWageTaxDetailsListView);
});
